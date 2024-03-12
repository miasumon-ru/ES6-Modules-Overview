import './Sunglass.css'

import  { add, multiply, dividedTheFirstNumberByTheSecondNumber as divide } from '../../utils/calculator';


const Sunglass = () => {

    const result = add(5,7)

    const multiplication = multiply (10,52)

    const vaag = divide(30 , 5)

   
    
    return (
        <div>

            <h4>Result : {result} </h4>
            <h4>Multiplication : {multiplication} </h4>

            <h5>Divide : {vaag} </h5>


            
        </div>
    );
};

export default Sunglass;