class Question {
  constructor() {
    this.title = createElement("h1");
    this.input1 = createInput("Name");
    this.input2 = createInput("Answer");
    this.button = createButton("Submit");
    this.question = createElement("h3");
    this.option1 = createElement("h4");
    this.option2 = createElement("h4");
    this.option3 = createElement("h4");
    this.option4 = createElement("h4");
    this.reset = createButton("Reset");
  }

  hide() {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display() {
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html(
      "Question:- Which of the following words is the most accurate meaning of little ?"
    );
    this.question.position(150, 80);
    this.option1.html("1: Few ");
    this.option1.position(150, 100);
    this.option2.html("2: Small");
    this.option2.position(150, 120);
    this.option3.html("3: Less ");
    this.option3.position(150, 140);
    this.option4.html("4: Tiny");
    this.option4.position(150, 160);

    this.input1.position(250, 230);
    this.input2.position(450, 230);
    this.button.position(400, 300);

    this.button.mousePressed(() => {
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });
    this.reset.position(20, 20);
    this.reset.mousePressed(() => {
      contestant.updateCount(0);
      quiz.update(0);
      database.ref("/").update({
        contestants: null,
      });
    });
  }
}
