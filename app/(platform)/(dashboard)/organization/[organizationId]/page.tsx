import { create } from "@/actions/create-board";

const organizationIdPage = () => {
  return (
    <div>
      <form action={create}>
        <input
          id="title"
          name="title"
          required
          placeholder="タイトルを入力してください.."
          className="border-black border p-1"
        />
      </form>
    </div>
  );
};

export default organizationIdPage;
