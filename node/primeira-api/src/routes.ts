import { Router, Response, Request, NextFunction } from "express";

const router = Router();

const tarefas =  ["Estudar NodeJS", "Estudar javascript"]

router.use((req: Request, res: Response, next: NextFunction) => {
    console.log("Passou por um middleware")

    return next();
})

function checkTarefa(req: Request, res: Response, next: NextFunction){
    if(!req.body.name){
        res.status(400).json({ message: "Nome invalido" })
        return;
    }

    return next();
}

function checkIndexTarefa(req: Request, res: Response, next: NextFunction){
    
    const tarefa = tarefas[Number(req.params.index)]

    if(!tarefa){
        res.status(400).json({ error: "Tarefa não encontrada!"})
        return;
    }

    return next();
}


router.get("/tarefas", (req: Request, res: Response) => {

    res.json(tarefas)
    
})

router.get("/tarefas/:index", checkIndexTarefa, (req: Request, res: Response) => {
    const index = req.params.index;
    
    res.json({ tarefa: tarefas[Number(index)] })
})

router.post("/tarefas", checkTarefa, (req: Request, res: Response) => {
    const { name } = req.body;

    tarefas.push(name)
    
    res.json(tarefas)
})

router.put("/tarefas/:index", checkTarefa, checkIndexTarefa, (req: Request, res: Response) => {
    const { index } = req.params;
    const { name } = req.body;

    tarefas[Number(index)] = name;

    res.json(tarefas)

})

router.delete("/tarefas/:index", checkIndexTarefa, (req: Request, res: Response) => {
    const { index } = req.params;

    tarefas.splice(Number(index));

    res.json({ message: "Task deleted"})
})

export { router }