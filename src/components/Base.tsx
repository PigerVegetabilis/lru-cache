import { Button } from "@mui/material";
import "./Base.css"
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function Base(){

    type Component = {
        key : number;
    }

    const capacity : number = 5;
    const [components, setComponents] = useState<Array<Component>>([]);
    const [number, setNumber] = useState(0);


    function addComp(){
        if (number >= capacity){
            setComponents(components.splice(0, 1))
        }
        setComponents([...components, {key: number + 1}]);
        setNumber(number + 1);
        console.log(components);
    }

    function swapComps(id: number){
        const clicked = components.findIndex(item => item.key === id);
        if (clicked === components.length - 1) return;
        const newComps = [...components];
        newComps.splice(clicked, 1);
        newComps.push({key: id});
        setComponents(newComps);
    }

    return (
        <>
            <Button variant="outlined" onClick={addComp}>Add new one</Button>
            <div className="lru-base">
                <AnimatePresence mode="popLayout">
                    {components.map((item) => (
                        <motion.div
                            key={item.key}
                            layout
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, x: -100 }}
                            transition={{ duration: 0.78 }}
                            className="lru-component-wrapper"
                            onClick={() => swapComps(item.key)}
                            style = {{backgroundColor: `rgba(100, 200, 255, ${-1 * (-0.1 - (components.findIndex(ite => ite.key === item.key) / components.length))})`}}   
                            
                        >
                            {item.key}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </>
    )
}