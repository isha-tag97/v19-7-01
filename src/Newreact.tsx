import React, { useActionState } from "react";
import { redirect } from "react-router-dom";

function Newreact({ name, setName }) {
  const updateName = async (name) => {
    if (!name) {
      return "Name is required.";
    }
    console.log(`Updating name to: ${name}`);
    // Simulate async operation
    return new Promise((resolve) => setTimeout(() => resolve(null), 1000));
  };
  const [error, submitAction, isPending] = useActionState(
    async (PreviousState, formData) => {
      console.log(formData);

      const error = await updateName(formData.get("name"));
      if (error) {
        return error;
      }
      redirect("/");
      return null;
    },
    null
  );

  return (
    <div>
      <form action={submitAction}>
        <input type="text" name="name" />
        <button type="submit" disabled={isPending}>
          Update
        </button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Newreact;
