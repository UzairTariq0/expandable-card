import { motion } from 'framer-motion';
import { useState } from 'react';
import './App.css';
function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <motion.div layout transition={{ layout: { duration: 1, type: "spring" } }} style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.5) " }} onClick={() => setIsOpen(!isOpen)} className='card'>
        <motion.h2 layout="position">Uzair Tariq 👁</motion.h2>
        {isOpen && (
          <motion.div initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 0.5}} className='expand'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio laboriosam facilis, asperiores sit quibusdam quae ipsum molestiae hic id natus assumenda veniam totam est
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis incidunt nostrum fugit rerum,
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}

export default App;
