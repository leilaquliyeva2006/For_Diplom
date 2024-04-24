class Gallery {
	#currIndex = 0;
	#imagesSrc = [];
	#prevBtn = document.createElement('button');
	#nextBtn = document.createElement('button');
	#currImg = new Image();
	#container = document.createElement('div');
	
	constructor(destination, imagesSrc) {
		this.#imagesSrc = imagesSrc;
		
		this.#prevBtn.classList.add('prev');
		this.#prevBtn.addEventListener('click', () => this.#changeImage(-1));
		
		this.#nextBtn.classList.add('next');
		this.#nextBtn.addEventListener('click', () => this.#changeImage(1));
		
		this.#currImg.addEventListener('load', () => this.#imageLoadEnded());
		this.#currImg.src = this.#imagesSrc[0];
		
		this.#container.classList.add('gallery');
		this.#container.append(this.#prevBtn, this.#currImg, this.#nextBtn);
		
		destination.append(this.#container);
	}
	
	#imageLoadEnded() {
		this.#container.classList.remove('loading');
	}
	
	#changeImage(direction) {
		this.#container.classList.add('loading');
		
		this.#currIndex = (this.#currIndex + direction + this.#imagesSrc.length) % this.#imagesSrc.length;
		
		this.#currImg.src = this.#imagesSrc[this.#currIndex];
	}
	
	get element() {
		return this.#container;
	}
}

export default Gallery