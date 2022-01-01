import { useState, } from "react"
import { useDispatch, useSelector } from "react-redux"

import { ADD_JOB, DELETE_JOB, } from "./../../redux/actions"
import { jobListSelector } from "../../redux/selectors"

const Todo = () => {

    //two-way binding
    const [job, setJob] = useState('')

    const handleInputChange = (e) => {
        setJob(e.target.value)
    }


    //dispatch the action
    const dispatch = useDispatch()
    ////action add job
    const handleClickAddJob = () => {
        dispatch(ADD_JOB({
            name: job
        }))
        setJob('')
    }
    ////action delete job
    const handleClickDeleteJob = (index) => {
        // return console.log(index)
        dispatch(DELETE_JOB({
            index
        }
        ))
    }

    //use useSelector to get data from store
    const jobs = useSelector(jobListSelector)
    const jobsss = useSelector(state => state)
    // console.log(jobsss)
    // const jobs = useSelector((state) => console.log(state))
    // console.log(jobs)

    return (
        <div style={{ padding: ' 0 20px' }}>
            <h3>Todo</h3>
            <input type="text" placeholder="input todo here" name='jobTodo' value={job} onChange={handleInputChange} />
            <button onClick={handleClickAddJob}>Add</button>
            <ul>
                {jobs.map((job, index) =>
                    <li key={index}>
                        {job}
                        {/* <span onClick={() => dispatch(DELETE_JOB(index))} > &times;</span> */}
                        <span onClick={handleClickDeleteJob.bind(this,index)} > &times;</span>
                        {/* <span onClick={()=>handleClickDeleteJob(index)} > &times;</span> */}
                    </li>
                )}
            </ul>

        </div>
    )
}

export default Todo