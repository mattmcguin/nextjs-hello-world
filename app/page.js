export default function HomePage() {
  return (
    <main style={{ padding: '4rem 1.5rem', maxWidth: 720, margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>Hello from Next.js on Kubernetes</h1>
      <p style={{ fontSize: '1.05rem', lineHeight: 1.6 }}>
        This app is deployed with Argo CD from a separate application repository.
      </p>
    </main>
  );
}
