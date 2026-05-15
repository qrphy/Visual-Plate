<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

Key changes in Next.js 16:
- `middleware.ts` → `proxy.ts` (same API, renamed file)
- Route Handlers: `app/api/[name]/route.ts`, named exports per HTTP method
- `RouteContext<'/path/[param]'>` for typed route params in TypeScript
- `use cache` directive replaces older caching patterns — must be in a helper function, not directly in route body
<!-- END:nextjs-agent-rules -->

# Agent Routing

## Which agent to use

| Task | Agent / Skill |
|------|--------------|
| New page, component, or API route | `planner` → `ui-agent` (if UI) → `builder` |
| Backend-only (API route, DB query) | `planner` → `builder` |
| Code was written or changed | `reviewer` + `/code-review` |
| Frontend audit before deploy | `/frontend-audit` |
| UI/UX decision | `ui-agent` → `ui-designer` |
| Bug or unexpected behavior | `debugger` |
| Error pattern (TypeError, 404, hydration) | `error-detective` |
| TypeScript / build / design violations | `frontend-tester` → `frontend-fixer` |

## Project-specific notes for agents

- **Phase:** 0→1 validation — keep scope minimal, no premature abstractions
- **Payments:** Stripe Elements in popup — no checkout.sessions.create with redirect URLs; use Payment Intents or Elements API directly
- **Auth:** There is no auth system — all users are anonymous, tracked via `vp_uid` cookie + `anonymous_users` DB table
- **Cache:** Every dish result must be saved to the `dishes` table — DB cache is a core feature, not optional
- **Speed:** OCR → result pipeline must complete in under 3 seconds perceived time; use streaming/progressive rendering
- **Mobile:** Camera input (`accept="image/*" capture="environment"`) is the primary CTA on mobile
