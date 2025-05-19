function TodoCard({name='Service Name',img,description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur velit laboriosam quod provident, delectus est.'}){
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-0  py-4">
                <div className="font-quickSand text-xl mb-3">{name}</div>
                <div className="text-sm text-center w-9/12 font-cinzel">{description}</div>
            </div>
        </>
    )
}
export function ToDo() {
    const todo = [
        {name:'Wineries Tour', description:`I'm a paragraph. Click here to add your own text and edit me`},
        {name:'Cultural Sites', description:`I'm a paragraph. Click here to add your own text and edit me`},
        {name:'Market Tour', description:`I'm a paragraph. Click here to add your own text and edit me`},
        {name:'Leisure Activities', description:`I'm a paragraph. Click here to add your own text and edit me`},
        {name:'Birds Safari', description:`I'm a paragraph. Click here to add your own text and edit me`},
        {name:'Horse Riding', description:`I'm a paragraph. Click here to add your own text and edit me`},

    ]
    return (
        <>
            <div className="flex flex-col gap-10 py-26">
                <div className="uppercase text-center text-2xl font-quickSand">Things to Do</div>
                <div className="grid grid-cols-3 mx-auto gap-x-0 gap-y-10 ">
                    {todo.map(item=>(
                        <TodoCard name={item.name}  description={item.description}/>
                    ))}
                </div>
            </div>
        </>
    );
}