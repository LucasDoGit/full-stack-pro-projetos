import { NextResponse } from "next/server";

let tarefas = ['Comprar coca', 'Estudar nextJS']



export async function GET(request: Request){
    return NextResponse.json(tarefas)
}

export async function POST(request: Request){
    const data = await request.json();

    tarefas.push(data.name)
    return NextResponse.json(tarefas)
}

export async function PUT(request: Request){
    const { searchParams } = new URL(request.url)
    const index = searchParams.get("index");

    const data = await request.json();

    tarefas[Number(index)] = data.name

    return NextResponse.json({ message: 'Tarefa atualizada com sucesso', tarefas })
}

export async function DELETE(request: Request){
    const { searchParams } = new URL(request.url)
    const index = searchParams.get("index");

    tarefas.splice(Number(index), 1)

    return NextResponse.json({ message: 'Tarefa excluída com sucesso', tarefas })
}