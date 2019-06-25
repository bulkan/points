import p5 from 'p5';

let xoff = 0.0;
let yoff = 0.0;
let xincrement = 0.01;

//Force page refresh on hot reload
if (module.hot) module.hot.accept(() => window.location.reload());

const Sketch = (p) => {
	p.setup = () => {
		p.createCanvas(600, 800);
		p.background(255);
		p.noStroke();
	};

	p.draw = () => {
		let n = p.noise(xoff, yoff);

		p.fill(255 * n, 10);
		p.rect(0, 0, p.width, p.height);

		p.fill(n * 255, n * 100, n * 255);
		p.rect(n * p.width, p.height / 2, 50, 50);

		xoff += xincrement;
		yoff += xincrement;
	};
};

new p5(Sketch);