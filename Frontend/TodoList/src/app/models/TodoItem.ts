export class TodoItem
{

    public id: number;
    public name: string;
    public completed: number;
    public folder: number;

    public constructor(data?: any)
    {
        if(data)
        {
            this.id = data.id;
            this.name = data.name;
            this.completed = data.completed;
            this.folder = data.folder;
        }
    }
}