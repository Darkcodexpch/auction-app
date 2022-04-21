import { useEffect } from "react"
import { useNavigate } from 'react-router-dom'
function Protected(props) {
  let navigate = useNavigate()
  let Cmp = props.Cmp
  useEffect(()=>{
    let data = JSON.parse(localStorage.getItem('logindata'));
      if(!data){
        navigate('/')
      }
  else if (data[0].opt == 1) {
    navigate('/Sale') 
  }

  else if (data[0].opt == 2) {
    navigate('/Buy')
  }



  else{
    navigate('/')
  }

    
      
  },[])

    return (

      <div>
          <Cmp/>
      </div>
  )
}

export default Protected