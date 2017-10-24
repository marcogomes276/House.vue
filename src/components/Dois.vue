<template>
<div>
	<section>
		<div>
			<img src="../assets/Romulo.jpg">
			<h1>Romulo</h1>
			<p>{{ Romulo }}</p>
			<button v-on:click="addRomulo()">+</button>
			<button v-on:click="removeRomulo()">-</button>
		</div>	
	</section>
	<section>
		<div>
			<img src="../assets/Marco.jpg">
			<h1>Marco</h1>
			<p>{{ Marco }}</p>
			<button v-on:click="addMarco()">+</button>
			<button v-on:click="removeMarco()">-</button>
		</div>	
		<div>
		<button v-on:click="mostraVencedor()">Mostrar vencedor</button>
		<p> {{ vencedor }} </p>
		</div>
	</section>
</div>
</template>
<script>		
export default {
		name: 'Os dois',
		data() {
			return {
				Romulo: 0,
				Marco: 0,
				vencedor: ''
			}
		},
		methods: {
			addRomulo() {
				return this.Romulo++					
			},
			removeRomulo() {
				return this.Romulo--					
			},
			addMarco() {
				return this.Marco++
			},
			removeMarco() {
				return this.Marco--					
			},
			mostraVencedor() {
				if (this.Marco > this.Romulo) {
					return this.vencedor = 'Marco venceu'
				} else {
					return this.vencedor = 'Romulo venceu'
				}
			}
		}
	}
</script>
<style scoped>
section {
	background: #008800;
	height: 200%;
}
section div img{
	width: 30%;
	border-radius:	60px;		
	margin-left: 30%;
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
section div button{
	margin-left: 50%;
	justify-content: center;
	flex-direction: row;
}
</style>