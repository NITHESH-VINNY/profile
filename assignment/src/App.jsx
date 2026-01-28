import React from 'react'
import Counter from './examples/Counter'
import Toggle from './examples/Toggle'
import TodoList from './examples/TodoList'
import SimpleForm from './examples/SimpleForm'
import FetchExample from './examples/FetchExample'
import ConditionalRender from './examples/ConditionalRender'
import ListFilter from './examples/ListFilter'

export default function App(){
  return (
    <div className="container">
      <header>
        <h1>Basic React Examples</h1>
      </header>

      <section className="example">
        <h2>Counter</h2>
        <Counter />
      </section>

      <section className="example">
        <h2>Toggle</h2>
        <Toggle />
      </section>

      <section className="example">
        <h2>Todo List</h2>
        <TodoList />
      </section>

      <section className="example">
        <h2>Simple Form</h2>
        <SimpleForm />
      </section>

      <section className="example">
        <h2>Fetch Example</h2>
        <FetchExample />
      </section>

      <section className="example">
        <h2>Conditional Rendering</h2>
        <ConditionalRender />
      </section>

      <section className="example">
        <h2>List & Filter</h2>
        <ListFilter />
      </section>
    </div>
  )
}
