import Button from "@/components/Button";

export default function NewHabit() {
  async function newHabit(formData: FormData) {
    "use server";

    const habit = formData.get("habit");
    console.log(habit)
  }

  return (
    <main className="container relative flex flex-col gap-8 px-12 pt-16">
      <h1 className="text-4xl font-light text-center text-white font-sans">novo hábito</h1>

      <form action={newHabit} className="flex flex-col gap-5 mt-4">
        <input type="text" name="habit" id="habit" className="p-2 font-sans text-xl text-white rounded-md bg-neutral-800" />
        <div className="flex flex-col gap-3">
          <Button color content="Cadastrar" type="submit" />
          <Button color={false} content="Cancelar" />
        </div>
      </form>
    </main>
  )
}
