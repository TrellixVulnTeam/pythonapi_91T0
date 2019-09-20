import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Observable, of,throwError} from 'rxjs';
import { LevelObj} from '../models/level'
import { SubjectObj } from '../models/subject';
import { QuarterObj } from '../models/quarter';
import { TopicObj } from '../models/topic';
import { QuizObj } from '../models/quiz';
import { QuestionObj } from '../models/question';
import { ChoiceObj } from '../models/choice';
import { MenuModelsObj} from '../models/menumodels';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class K12serviceService {
  constructor(private http: HttpClient) { }
  getQuizForTopic(subjectId:string,periodId:string,topicId:string) : Observable<TopicObj>{
    var subjectObj = new SubjectObj();
    subjectObj.subjectId = 1;//(subjectId) check how to cast an string into Int.
    subjectObj.subjectDesc = "Mathematics";
    
    var quarterObj = new QuarterObj();
    quarterObj.subject = subjectObj;
    quarterObj.quarterId = 1;//(quarterId) check how to cast a string into int

    var topicObj = new TopicObj();
    topicObj.quarter = quarterObj;
    topicObj.topicId = 1;//(topicId) check how to  cast a string into int
    topicObj.topicDesc = "Roman Numerals";
    topicObj.quizes = new Array<QuizObj>();
    
    var quizObj = new QuizObj();
    quizObj.quizId = 101;
    quizObj.quizDesc = "First Quiz";
    quizObj.questions = new Array<QuestionObj>();
    quizObj.questions.push(this.mockQuestionObj(quizObj,1,"what is the numeric value of the roman Numeral XII"));
    quizObj.questions.push(this.mockQuestionObj(quizObj,2,"what is the numeric value of the roman Numeral V"))
    
    topicObj.quizes.push(quizObj);
    
    return of(topicObj);
  }
  mockQuestionObj(quizObj:QuizObj,questionId:number,questionDesc:string):QuestionObj{
    var question1 = new QuestionObj();
    question1.questionId = questionId;
    question1.questionDesc = questionDesc;
    question1.quiz = quizObj;
    question1.answerId = q1choice4;
    question1.choices = new Array<ChoiceObj>();
    var q1choice1 = new ChoiceObj();
    q1choice1.choiceId = 1;
    q1choice1.choiceDesc = "5";
    q1choice1.question = question1;
    
    var q1choice2 = new ChoiceObj();
    q1choice2.choiceId = 2;
    q1choice2.choiceDesc = "12";
    q1choice2.question = question1;
    

    var q1choice3 = new ChoiceObj();
    q1choice3.choiceId = 3;
    q1choice3.choiceDesc = "23";
    q1choice3.question = question1;
    

    var q1choice4 = new ChoiceObj();
    q1choice4.choiceId = 4;
    q1choice4.choiceDesc = "32";
    q1choice4.question = question1;
    
    question1.choices.push(q1choice1,q1choice2,q1choice3,q1choice4);
    question1.answerId = q1choice2;
   // quizObj.questions.push(question1);

   var question2 = new QuestionObj();
   question2.questionId = 2;
   question2.questionDesc = "What is the numeric value of the  Roman Numeral V ";
   question2.quiz = quizObj;
   question2.answerId = q1choice4;
   question2.choices = new Array<ChoiceObj>();
   question2.choices.push(q1choice3);
   question2.choices.push(q1choice2);
   question2.choices.push(q1choice1);
   question2.choices.push(q1choice4);
   question2.answerId = q1choice1;
    return question1;
  }
  getMenuForLoggedIn(levelId:number) : Observable<MenuModelsObj>{
    var menuObj = new MenuModelsObj();
    menuObj.label = "Primary One";
    menuObj.icon="card_membership";
    menuObj.items = new Array<MenuModelsObj>();
    menuObj.id = "1"; //level id;
    menuObj.link = "/level/" + menuObj.id;
    var menuObjItem1 = new MenuModelsObj();
    menuObjItem1.label="Mathematics";
    menuObjItem1.icon = "bar_chart";
    menuObjItem1.id = "1"; // "SubjectID"
    menuObjItem1.link = menuObj.link+"/subject/" + menuObjItem1.id;
    menuObjItem1.items = new Array<MenuModelsObj>();
    
    var menuObjItem1_1 = new MenuModelsObj();
    menuObjItem1_1.label="First Period";
    menuObjItem1_1.icon="av_timer";
    menuObjItem1_1.id = "1"; // Period ID
    menuObjItem1_1.link = menuObjItem1.link + "/period/" + menuObjItem1_1.id;
    menuObjItem1_1.items = new Array<MenuModelsObj>();

    var menuObjItem1_1_1 = new MenuModelsObj();
    menuObjItem1_1_1.label="Roman Numerals";
    menuObjItem1_1_1.icon="vertical_split";
    menuObjItem1_1_1.id = "1";//TOpic id
    menuObjItem1_1_1.link = menuObjItem1_1.link +"/topic/"+menuObjItem1_1_1.id;

    var menuObjItem1_1_1_1 = new MenuModelsObj();
    menuObjItem1_1_1_1.label="Quiz 1";
    menuObjItem1_1_1_1.id="1"; //Quiz Id
    menuObjItem1_1_1_1.link=menuObjItem1_1_1.link+"/quiz/" + menuObjItem1_1_1_1.id;
    menuObjItem1_1_1.items = new Array<MenuModelsObj>();

    var menuObjItem1_1_1_2 = new MenuModelsObj();
    menuObjItem1_1_1_2.label="Quiz 2";
    menuObjItem1_1_1_2.id="2"; //Quiz Id
    menuObjItem1_1_1_2.link=menuObjItem1_1_1.link+"/quiz/" + menuObjItem1_1_1_2.id;
    menuObjItem1_1_1.items = new Array<MenuModelsObj>();
    menuObjItem1_1_1.items.push(menuObjItem1_1_1_2);
    menuObjItem1_1_1.items.push(menuObjItem1_1_1_1);
    menuObjItem1_1.items.push(menuObjItem1_1_1);

    menuObjItem1.items.push(menuObjItem1_1);
    menuObj.items.push(menuObjItem1);
    return of(menuObj);
  }
}
