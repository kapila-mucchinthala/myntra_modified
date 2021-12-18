import Products from "./db.js";

const Data=[
    {
        id:1,
        name:"Ranu"
    },
    {
        id:2,
        name:"Ranu"
    },
    {
        id:3,
        name:"Ranu"
    }

]
export const ShowData = () => {
    return (
        <div>
            {
                Data.map((e) => {
                    <div key={e.id}>
                        <p>{e.name}</p>
                    </div>
                })
            }
        </div>
    )
}