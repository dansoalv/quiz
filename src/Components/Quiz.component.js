import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {addAnswers, getQuestionsList} from "../Actions/Quiz.actions";

const QuizComponent = () => {
    const dispatch = useDispatch();

    const [food, setFood] = useState('')
    const [years, setYears] = useState('')
    const [country, setCountry] = useState('')
    const [siblings, setSiblings] = useState('')
    const [framework, setFramework] = useState('')

    useEffect(() => {
        const loadQuestionsList = () => dispatch(getQuestionsList());
        loadQuestionsList()
    }, [])

    const questions = useSelector(state => state.Quiz.questions)
    const error = useSelector(state => state.Quiz.error)

    const handleInput = (e, key) => {
        switch (key) {
            case 'food':
                setFood(e)
            case 'years':
                setYears(e)
            case 'country':
                setCountry(e)
            case 'siblings':
                setSiblings(e)
            case 'framework':
                setFramework(e)
            default:
                break
        }
    }
    const sendAnswers = Answers => dispatch(addAnswers(Answers))

    const handleSubmit = (e) => {
        e.preventDefault();
        sendAnswers({
            food,
            years,
            country,
            siblings,
            framework
        })

        setTimeout( () => {
            window.location.reload()
        }, 1000)
    }

    return(
      <React.Fragment>
          <div className="container">
              <div className="row">
                  <div className="col">
                      { error ? <p className="font-weight-bold alert alert-danger text-center mt-4">Try Again!</p> : null }
                  </div>
              </div>
              <div className="row mt-5">
                  <div className="col">
                      <div className="jumbotron">
                          <h1 className="display-4">Welcome!</h1>
                          <p className="lead">Answer the next questions</p>
                          <hr className="my-4"/>
                          <form onSubmit={handleSubmit}>
                          {questions !== null && questions.length > 0 &&
                              questions.map(item =>
                                  <div className="form-group">
                                      <label>{item.question}</label>
                                      <input type={item.typeAnswer} className="form-control" onChange={e => handleInput(e.target.value, item.key)}/>
                                  </div>
                              )
                          }
                              <hr className="my-4"/>
                              <p>Don't forget review your answers</p>
                              <button type="submit" className="btn btn-primary font-weight-bold text-uppercase d-block w-100" >Send</button>
                          </form>

                      </div>
                  </div>
              </div>
          </div>
      </React.Fragment>
    );
}

export default QuizComponent