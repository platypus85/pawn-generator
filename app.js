new Vue({
	el: '#app',
	data: {
		numberOfPawns: 0,
		image: ''
	},
	methods: {
		onFileChange(e) {
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length)
				return;
			this.createImage(files[0]);
		},
		createImage(file) {
			var image = new Image();
			var reader = new FileReader();
			var vm = this;

			reader.onload = (e) => {
				vm.image = e.target.result;
			};
			reader.readAsDataURL(file);
		},
		removeImage: function (e) {
			this.image = '';
		},
		updatePawns: function (e) {
			this.numberOfPawns = +e.target.value;
			console.log(this.numberOfPawns);
		}
	}
})