 
class Slider {
    constructor(props) {
      this.rootElement = props.element;
      this.slides = Array.from(
        this.rootElement.querySelectorAll(".slider-list__item")
      );
      this.slidesLength = this.slides.length;
      this.current = 0;
      this.isAnimating = false;
      this.direction = 1; // -1
      this.baseAnimeSettings = {
        rotation: 45,
        //duração da animação entre transições
        duration: 750,
        easing: 'easeInOutCirc'
      };
     
     
      this.baseAnimeSettingsTitle = {
        rotation: 45,
        duration: 1750,
        elasticity: function(el, i, l) {
          return (200 + i * 200);
        }
      };
      //controlos
      this.pointsBar = this.rootElement.querySelector(".slider__points-bar");
      this.thumbs = Array.from(this.rootElement.querySelectorAll(".points-control"));
      this.prevButton = this.rootElement.querySelector(".slider__arrow_prev");
      this.nextButton = this.rootElement.querySelector(".slider__arrow_next");
  
      this.slides[this.current].classList.add("slider-list__item_active");
      this.thumbs[this.current].classList.add("points-control_active");
  
      this._bindEvents();
    }
  
    goTo(index, dir) {
      if (this.isAnimating) return;
      var self = this;
      let prevSlide = this.slides[this.current];
      let nextSlide = this.slides[index];
  
      self.isAnimating = true;
      self.current = index;
      nextSlide.classList.add("slider-list__item_active");
  
      anime(Object.assign({}, self.baseAnimeSettings, {
        targets: nextSlide,
        rotate: [90 * dir + 'deg', 0],
        translateX: [90 * dir + '%', 0]
      }));
  
      
      anime(Object.assign({}, self.baseAnimeSettingsTitle, {
        targets: nextSlide.querySelectorAll('.title__element'),
        rotate: [90 * dir + 'deg', 0],
        translateX: [90 * dir + '%', 0]
      }));
  
      anime(Object.assign({}, self.baseAnimeSettings, {
        targets: prevSlide,
        rotate: [0, -90 * dir + 'deg'],
        translateX: [0, -100 * dir + '%'],
        complete: function(anim) {
          self.isAnimating = false;
          prevSlide.classList.remove("slider-list__item_active");
          self.thumbs.forEach((item, index) => {
            var action = index === self.current ? "add" : "remove";
            item.classList[action]("points-control_active");
          });
        }
      }))
  
      anime(Object.assign({}, self.baseAnimeSettingsTitle, {
        targets: prevSlide.querySelectorAll('.title__element'),
        rotate: [0, -90 * dir + 'deg'],
        translateX: [0, -100 * dir + '%']
      }));
      
    }
  
    goStep(dir) {
      let index = this.current + dir;
      let len = this.slidesLength;
      let currentIndex = (index + len) % len;
      this.goTo(currentIndex, dir);
    }
  
    goNext() {
      this.goStep(1);
    }
  
    goPrev() {
      this.goStep(-1);
    }
  
    _pointsClickHandler(e) {
      var self = this;
      if (self.isAnimating) return;
      let target = e.target.closest(".points-control");
      if (!target) return;
      let index = self.thumbs.indexOf(target);
      if (index === self.current) return;
      let direction = index > self.current ? 1 : -1;
      self.goTo(index, direction);
    }
  
    _bindEvents() {
      var self = this;
      ["goNext", "goPrev", "_pointsClickHandler"].forEach(method => {
        self[method] = self[method].bind(self);
      });
      self.nextButton.addEventListener("click", self.goNext);
      self.prevButton.addEventListener("click", self.goPrev);
      self.pointsBar.addEventListener("click", self._pointslickHandler);
    }
  }
  
  // ===== init ======
  let slider = new Slider({
    element: document.querySelector(".slider")
  });
  