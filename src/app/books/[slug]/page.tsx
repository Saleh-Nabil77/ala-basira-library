export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main>
      <h1>الكتاب: {slug}</h1>
    </main>
  );
}
