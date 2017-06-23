new Vue({
	el: '#app',
	data: {
		numberOfPawns: 0,
		images: []
	},
	methods: {
		loadingImages(e) {
			var files = e.target.files || e.dataTransfer.files;
			if (!files.length)
				return;
			this.createImage(files);
		},
		createImage(files) {
			var vm = this;
			for (var i = 0; i < files.length; i++) {
				var reader = new FileReader();
				reader.onload = (e) => {
					vm.images.push(e.target.result);
				};
				reader.readAsDataURL(files[i]);
			}
		},
		clearImages() {
			this.images = [];
		},
		updatePawns(e) {
			this.numberOfPawns = +e.target.value;
		}
	}
})