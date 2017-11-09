import {Meteor} from "meteor/meteor";
import {Todos} from "../../both/collections/todos";

Meteor.methods({
    addTodo(content:string) {
        Todos.insert({
            content
        });
    },
    removeTodo(_id:string) {
        Todos.remove({
            _id
        })
    }
});
