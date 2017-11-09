import {Meteor} from "meteor/meteor";
import {Todos} from "../../both/collections/todos";

Meteor.publish('todoList', function () {
    return Todos.find({});
});
