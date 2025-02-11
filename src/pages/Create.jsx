import CreateForm from '@/components/person/CreateForm.jsx'

export default function Add() {
  return (
    <div className="container py-5">
      <CreateForm />
      <p>
        {' '}
        Rules for Adding a Family Member to the Family Tree" <br />
        Important: You can attach a child to an existing parent.
        <br /> First, go to the "Find a Family Member" page and verify the
        parent's name and ID. Then, enter the new family member's name and their
        parent's name. Other fields are optional.
      </p>
    </div>
  )
}
