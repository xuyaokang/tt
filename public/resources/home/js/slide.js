            $(function(){
                $('.link_prev').on('click', function() {
                    clearInterval(sTimer);
                    if (gameOver) {
                        gameOver = false;
                        counts_l++;
                        slideContainer.animate({
                            left: '+=' + s_w
                        }, 500, function() {
                            gameOver = true;
                            slideContainer.animate({
                                left: '-=' + s_w
                            }, 0);
                            var html = '';
                            slideContainer.find('li:gt(' + (maxCounts - c - 1) + ')').each(function() {
                                html += '<li>' + $(this).html() + '</li>';
                            });
                            slideContainer.find('li:gt(' + (maxCounts - c - 1) + ')').remove();
                            slideContainer.html(html + slideContainer.html());
                        });
                    }
                });
                $('.link_next').on('click', function() {
                    clearInterval(sTimer);
                    link_next_event();
                });

                function link_next_event() {
                    if (gameOver) {
                        gameOver = false;
                        counts_r++;
                        slideContainer.animate({
                            left: '-=' + s_w
                        }, 500, function() {
                            gameOver = true;
                            slideContainer.animate({
                                left: '+=' + s_w
                            }, 0);
                            slideContainer.find('li:lt(' + c + ')').clone().appendTo(slideContainer);
                            slideContainer.find('li:lt(' + c + ')').remove();
                        });
                    }
                }

                // lastCLiHtml();
                // slideContainer.find('li:gt(' + (maxCounts - 1) + ')').remove();
                // function lastCLiHtml() {
                //     var html = '';
                //     slideContainer.find('li:gt(' + (maxCounts - c - 1) + ')').each(function() {
                //         html += '<li>' + $(this).html() + '</li>';
                //     });
                //     slideContainer.html(html + slideContainer.html()).css({
                //         'margin-left': -s_w + 'px'
                //     });
                // }

                var l_hover = false, m_hover = false, r_hover = false;
                $('.links').on({
                    'mouseover': function() {
                        m_hover = true;
                        clearInterval(sTimer);
                    },
                    'mouseout': function() {
                        m_hover = false;
                        isStartGo();
                    }
                });

                $('.link_next, .link_prev').on('mouseout', function() {
                    l_hover = false;
                    r_hover = false;
                    isStartGo();
                })
                $('.link_next, .link_prev').on('mouseover', function() {
                    l_hover = true;
                    r_hover = true;
                    clearInterval(sTimer);
                })
                setInverterTimer();
                function setInverterTimer() {
                    clearInterval(sTimer);
                    sTimer = setInterval(function() {
                        link_next_event();
                    }, 3000);
                }

                function isStartGo() {
                    var st = setTimeout(function() {
                        if (!l_hover && !m_hover && !r_hover) {
                            setInverterTimer();
                        }
                    }, 1000);
                }

            });