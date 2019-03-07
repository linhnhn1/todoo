var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;} /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           Todo app structure
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           TodoApp
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	- TodoHeader
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	- TodoList
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               - TodoListItem #1
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           		- TodoListItem #2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           		  ...
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           		- TodoListItem #N
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           	- TodoForm
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           */
var todoItems = [];
todoItems.push({ index: 1, value: "learn react", done: false });
todoItems.push({ index: 2, value: "Go shopping", done: false });
todoItems.push({ index: 3, value: "buy flowers", done: true });var

TodoList = function (_React$Component) {_inherits(TodoList, _React$Component);function TodoList() {_classCallCheck(this, TodoList);return _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).apply(this, arguments));}_createClass(TodoList, [{ key: "render", value: function render()
    {var _this2 = this;
      var items = this.props.items.map(function (item, index) {
        return (
          React.createElement(TodoListItem, { key: index, item: item, index: index, removeItem: _this2.props.removeItem, markTodoDone: _this2.props.markTodoDone }));

      });
      return (
        React.createElement("ul", { className: "list-group" }, " ", items, " "));

    } }]);return TodoList;}(React.Component);var


TodoListItem = function (_React$Component2) {_inherits(TodoListItem, _React$Component2);
  function TodoListItem(props) {_classCallCheck(this, TodoListItem);var _this3 = _possibleConstructorReturn(this, (TodoListItem.__proto__ || Object.getPrototypeOf(TodoListItem)).call(this,
    props));
    _this3.onClickClose = _this3.onClickClose.bind(_this3);
    _this3.onClickDone = _this3.onClickDone.bind(_this3);return _this3;
  }_createClass(TodoListItem, [{ key: "onClickClose", value: function onClickClose()
    {
      var index = parseInt(this.props.index);
      this.props.removeItem(index);
    } }, { key: "onClickDone", value: function onClickDone()
    {
      var index = parseInt(this.props.index);
      this.props.markTodoDone(index);
    } }, { key: "render", value: function render()
    {
      var todoClass = this.props.item.done ?
      "done" : "undone";
      return (
        React.createElement("li", { className: "list-group-item " },
          React.createElement("div", { className: todoClass },
            React.createElement("span", { className: "glyphicon glyphicon-ok icon", "aria-hidden": "true", onClick: this.onClickDone }),
            this.props.item.value,
            React.createElement("button", { type: "button", className: "close", onClick: this.onClickClose }, "\xD7"))));



    } }]);return TodoListItem;}(React.Component);var


TodoForm = function (_React$Component3) {_inherits(TodoForm, _React$Component3);
  function TodoForm(props) {_classCallCheck(this, TodoForm);var _this4 = _possibleConstructorReturn(this, (TodoForm.__proto__ || Object.getPrototypeOf(TodoForm)).call(this,
    props));
    _this4.onSubmit = _this4.onSubmit.bind(_this4);return _this4;
  }_createClass(TodoForm, [{ key: "componentDidMount", value: function componentDidMount()
    {
      this.refs.itemName.focus();
    } }, { key: "onSubmit", value: function onSubmit(
    event) {
      event.preventDefault();
      var newItemValue = this.refs.itemName.value;

      if (newItemValue) {
        this.props.addItem({ newItemValue: newItemValue });
        this.refs.form.reset();
      }
    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("form", { ref: "form", onSubmit: this.onSubmit, className: "form-inline" },
          React.createElement("input", { type: "text", ref: "itemName", className: "form-control", placeholder: "add a new todo..." }),
          React.createElement("button", { type: "submit", className: "btn btn-default" }, "Add")));


    } }]);return TodoForm;}(React.Component);var


TodoHeader = function (_React$Component4) {_inherits(TodoHeader, _React$Component4);function TodoHeader() {_classCallCheck(this, TodoHeader);return _possibleConstructorReturn(this, (TodoHeader.__proto__ || Object.getPrototypeOf(TodoHeader)).apply(this, arguments));}_createClass(TodoHeader, [{ key: "render", value: function render()
    {
      return React.createElement("h1", null, "Todo list");
    } }]);return TodoHeader;}(React.Component);var


TodoApp = function (_React$Component5) {_inherits(TodoApp, _React$Component5);
  function TodoApp(props) {_classCallCheck(this, TodoApp);var _this6 = _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).call(this,
    props));
    _this6.addItem = _this6.addItem.bind(_this6);
    _this6.removeItem = _this6.removeItem.bind(_this6);
    _this6.markTodoDone = _this6.markTodoDone.bind(_this6);
    _this6.state = { todoItems: todoItems };return _this6;
  }_createClass(TodoApp, [{ key: "addItem", value: function addItem(
    todoItem) {
      todoItems.unshift({
        index: todoItems.length + 1,
        value: todoItem.newItemValue,
        done: false });

      this.setState({ todoItems: todoItems });
    } }, { key: "removeItem", value: function removeItem(
    itemIndex) {
      todoItems.splice(itemIndex, 1);
      this.setState({ todoItems: todoItems });
    } }, { key: "markTodoDone", value: function markTodoDone(
    itemIndex) {
      var todo = todoItems[itemIndex];
      todoItems.splice(itemIndex, 1);
      todo.done = !todo.done;
      todo.done ? todoItems.push(todo) : todoItems.unshift(todo);
      this.setState({ todoItems: todoItems });
    } }, { key: "render", value: function render()
    {
      return (
        React.createElement("div", { id: "main" },
          React.createElement(TodoHeader, null),
          React.createElement(TodoList, { items: this.props.initItems, removeItem: this.removeItem, markTodoDone: this.markTodoDone }),
          React.createElement(TodoForm, { addItem: this.addItem })));


    } }]);return TodoApp;}(React.Component);


ReactDOM.render(React.createElement(TodoApp, { initItems: todoItems }), document.getElementById('app'));