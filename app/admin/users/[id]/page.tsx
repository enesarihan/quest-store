import { getUserById } from "@/lib/actions/user.actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Update User",
};

const AdminUserUpdatePage = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;

  const user = await getUserById(id);

  if (!user) return notFound();

  return (
    <div className="space-y-8 max-w-5xl mx-auto">
      <h1 className="h2-bold">Update Product</h1>
      {user.name}
    </div>
  );
};

export default AdminUserUpdatePage;
