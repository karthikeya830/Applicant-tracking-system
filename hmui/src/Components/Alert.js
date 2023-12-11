import { useState, useEffect } from "react";

function Alert(props) {
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
      if (props.show) {
        setVisible(true);
        setTimeout(() => {
          setVisible(false);
        }, 2000);
      }
    }, [props.show]);
  
    return visible ? (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 absolute bottom-0 right-0 mb-4 mr-4">
        <p>{props.message}</p>
      </div>
    ) : null;
  }
  
export default Alert;
