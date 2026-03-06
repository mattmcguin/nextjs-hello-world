# nextjs-hello-world

Next.js hello world app deployed to Kubernetes via Argo CD.

## Local run

```bash
npm install
npm run dev
```

## GitOps deploy flow

1. Push to `main`.
2. GitHub Actions builds and pushes image to GHCR.
3. Workflow updates `k8s/kustomization.yaml` with the new image tag and commits to `main`.
4. Argo CD syncs `k8s/` to the cluster.

## Notes

- Argo CD in your cluster points at `path: k8s` for this repo.
- Ingress host is `nextjs.mattmcguiness.com`.
- If GHCR package is private, configure `imagePullSecrets` in the deployment.
- In GitHub repo settings, ensure workflows have `Read and write permissions` so the action can commit the tag bump.
