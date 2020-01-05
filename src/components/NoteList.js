import React from 'react';


const NoteList = ({list, deleteNote, editNote}) => {    
    const tlistOfNotes = list.length ? (
        list.map(todo => {
            return (
                <div className="note" key={todo.id}>
                    <div>
                        <input type="text" value={todo.content} id={todo.id}
                            onChange={(e) => {
                                editNote(e.target.value, todo.id)
                            }}
                        ></input>
                    </div>
                    
                    <div className="">                       
                        <button className="deleteBtn" onClick={()=>{deleteNote(todo.id)}}>X</button>                        
                    </div>
                    
                </div>
             )
        })
    ) : (
        <p className="note">You have not any todos yet.</p>
    )
  return (
    <div className="todos collection">
        {tlistOfNotes}
    </div>
  );
}

export default NoteList;
