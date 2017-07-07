<?php
	/*class f{
		public $id;
		public $m=100;
		
		public function show(){
			echo($this->m."资产");
		}
	}
	
	class son extends f{
		 public $m1=200;
		public function show2(){
			
			echo($this->m1."资产");
		} 
	}
	
	$s = new son();
	$s->show();*/
	
	/* class w{
		public $N;
		function w($N){
			$this->N = $N;
			$this->show();
			
		}
		private function show(){
			
			echo($this->N."专属");
		}
	}
	$s = new w("自己");  */
	class d{
		public $C;
		function d($C){
			$this->C = $C;
			//$this->show();
			$this->show1();
			
		}
		protected function show(){
			
			echo($this->C."受到保护".'<br />'.'<br />');
		}
	} 
	
	class e extends d{
		protected function show1(){
			
			echo($this->C."受到保护的".'<br />'.'<br />');
		}
		
	}
	$s = new e("小明");
	$s = new e("小花");
	$s = new e("小张");
	$s = new e("小王");
	$s = new e("小敏");
	$s = new e("小涛");
	$s = new e("小程");
	$s = new e("小杨");
	$s = new e("小红");
	$s = new e("小绿");
	$s = new e("小黑");
	$s = new e("小汪");
?>