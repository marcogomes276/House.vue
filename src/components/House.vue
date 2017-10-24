<template>
	<section>
		<div>
			<img src="../assets/Marco.jpg">
			<h1>Marco</h1>
			<p>Esse é o aluno do Vai Na Web</p>
		</div>	
	</section>
</template>
<script>		
	export default{
		nome:'pag1',

	}
</script>
<style scoped>
section {
	background: black;
	height: 200%;
}
section div img{
	width: 50%;
	border-radius:	60px;		
	margin-left: 21%;
	padding: 5%;
	}
section div h1{
	color: blue;
	font-size:50px;
	margin-left: 45%;
}
section div p{
	color: red;
	font-size: 30px;
	margin-left: 35%;
	/*padding-bottom: 5%;*/
}
</style>