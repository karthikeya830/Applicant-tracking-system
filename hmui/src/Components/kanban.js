import React, { useState } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import CandCard from "./CandCard";


const tasks = [
    { id: "1", content: "Achyuth Reddy" },
    { id: "2", content: "Karthikeya" },
    { id: "3", content: "Kiran Sai" },
    { id: "4", content: "Akanksh Reddy" },
    { id: "5", content: "Akshith Reddy" },
    { id: "6", content: "Mihir " },
    { id: "7", content: "Sujith" },
    { id: "8", content: "Praneeth" },
];

const taskStatus = {
    requested: {
        name: "Applied",
        items: tasks
    },
    toDo: {
        name: "Screening",
        items: []
    },
    inProgress: {
        name: "Interview",
        items: []
    },
    done: {
        name: "Hired",
        items: []
    }
};
const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
        const sourceColumn = columns[source.droppableId];
        const destColumn = columns[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...sourceColumn,
                items: sourceItems
            },
            [destination.droppableId]: {
                ...destColumn,
                items: destItems
            }
        });
    } else {
        const column = columns[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        setColumns({
            ...columns,
            [source.droppableId]: {
                ...column,
                items: copiedItems
            }
        });
    }
};


function Kanban(props) {

    const [applied, setApplied] = useState([ { id: "1", content: "Achyuth Reddy" },
    { id: "2", content: "Karthikeya" },
    { id: "3", content: "Kiran Sai" }]);
    const [screening, setScreening] = useState([{ id: "4", content: "Akanksh Reddy" },
    { id: "5", content: "Akshith Reddy" }]);
    const [interview, setInterview] = useState([{ id: "6", content: "Mihir " },
    { id: "7", content: "Sujith" },]);
    const [Hired, setHired] = useState([{ id: "8", content: "Praneeth" }]);

    const [columns, setColumns] = useState(taskStatus);
    return (
        <div>
            <div className="flex justify-center h-100%">
                <DragDropContext onDragEnd={(result) => onDragEnd(result, columns, setColumns)}>
                    {Object.entries(columns).map(([columnId, column], index) => {
                        return (
                            <div className="flex flex-col items-center" key={columnId}>
                                <h2>{column.name}</h2>
                                <div style={{ margin: 8 }}>
                                    <Droppable droppableId={columnId} key={columnId}>
                                        {(provided, snapshot) => {
                                            return (
                                                <div
                                                    className={`rounded-md p-4 w-64 max-h-screen transition-colors shadow-sm ${snapshot.isDraggingOver ? 'bg-blue-200' : 'bg-gray-200'}`}
                                                    {...provided.droppableProps}
                                                    ref={provided.innerRef}
                                                    style={{
                                                        background: snapshot.isDraggingOver
                                                            ? "rgba(176, 224, 230, 0.75)"
                                                            : "rgba(209, 213, 219, 0.75)",
                                                        borderRadius: "0.5rem",
                                                        padding: "1rem",
                                                        width: "15rem",
                                                        minHeight: "20rem",
                                                    }}
                                                >
                                                    {column.items.map((item, index) => {
                                                        return (
                                                            <Draggable
                                                                key={item.id}
                                                                draggableId={item.id}
                                                                index={index}
                                                            >
                                                                {(provided, snapshot) => {
                                                                    return (
                                                                        <div
                                                                            ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                            {...provided.dragHandleProps}
                                                                            style={{
                                                                                userSelect: "none",
                                                                                margin: "0 0 8px 0",
                                                                                minHeight: "50px",
                                                                                ...provided.draggableProps.style
                                                                            }}
                                                                        >
                                                                            <CandCard job={props.job} name={item.content} isDrag={snapshot.isDragging} />
                                                                        </div>
                                                                    );
                                                                }}
                                                            </Draggable>
                                                        );
                                                    })}
                                                    {provided.placeholder}
                                                </div>
                                            );
                                        }}
                                    </Droppable>
                                </div>
                            </div>
                        );
                    })}
                </DragDropContext>
            </div>
        </div>
    );
}

export default Kanban;
