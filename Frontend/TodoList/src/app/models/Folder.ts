export class Folder
{

    public id: number;
    public name: string;

    public constructor(data?: any)
    {
        if(data)
        {
            this.id = data.id;
            this.name = data.name;
        }
    }
}