import React from "react";
import slide1Jpeg from "../images/carousel/slideshow-1.jpg";
import slide1Webp from "../images/carousel/slideshow-1.jpg";
import ImageWebp from "../helpers/ImageWebp";


const Slide = (props) => {
  return (
      <div className="my-slides fade">
        <ImageWebp
            src={props.jpeg}
            srcWebp={props.webp}
            className={'slide-image'}
            alt={props.alt}
        />
        <div className="text">{props.caption}</div>
      </div>
  );
};

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    //this.showSlides();
  }

  showSlides () {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    this.setState({slideIndex: this.state.slideIndex + 1});
    if (this.state.slideIndex > slides.length) {this.setState({slideIndex: 1})}
    console.log(slides);
    slides[this.state.slideIndex-1].style.display = "block";
    setTimeout(this.showSlides, 2000); // Change image every 2 seconds
  };

  // Next/previous controls
  plusSlides(n) {
    this.moveSlide(this.state.slideIndex += n);
  }

// Thumbnail image controls
  currentSlide(n) {
    this.moveSlide(this.setState({slideIndex: n}));
  }

  moveSlide(n) {
    let i;
    let slides = document.getElementsByClassName("my-slides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {this.setState({slideIndex: 1})}
    if (n < 1) {this.setState({slideIndex: slides.length})}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.state.slideIndex-1].style.display = "block";
    dots[this.state.slideIndex-1].className += " active";
  }

  render() {
    return (
        <header>
          <div id="slideshow-container">
            <Slide alt={'slide-1'} jpeg={slide1Jpeg} webp={slide1Webp}/>
            <span id="prev" onClick={e => this.plusSlides(-1)}>&#10094;</span>
            <span id="next" onClick={e => this.plusSlides(1)}>&#10095;</span>
          </div>
          <br/>

          <div id={'slider'}>
            <span className="dot" onClick={e => this.currentSlide(1)}/>
            <span className="dot" onClick={e => this.currentSlide(2)}/>
            <span className="dot" onClick={e => this.currentSlide(3)}/>
          </div>

        </header>
    );
  }
};

export default Landing;
