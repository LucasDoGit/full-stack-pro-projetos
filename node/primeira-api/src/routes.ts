import { Router, Response, Request } from "express";

const router = Router();

router.get("/tarefas", (req: Request, res: Response) => {
    
    res.json({ message: "Minha primeira API", aluno: "Lucas Timoteo" })
})

export { router }