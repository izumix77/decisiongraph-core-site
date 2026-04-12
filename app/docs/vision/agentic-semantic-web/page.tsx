import { ConceptPageTemplate } from "../../_components/ConceptPageTemplate";

export default function Page() {
  return (
    <ConceptPageTemplate
      category="Vision / Proposal"
      title="Agentic Semantic Web"
      subtitle="Control Plane for the AI-Native Internet"
      sectionTitle="1. Abstract"
    >
      <p>
        Modern web infrastructure is designed for humans.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>Location-based access via URLs</li>
        <li>Natural language documents as primary interface</li>
        <li>Human-mediated authentication and payments</li>
        <li>Post-hoc filtering of information and actions</li>
      </ul>

      <p>
        However, in a world where AI agents act autonomously, this architecture
        becomes inefficient and unsafe.
      </p>

      <blockquote className="border-l-2 pl-4 italic">
        How do we guarantee what an AI agent can perceive and execute?
      </blockquote>

      <p>
        This paper introduces a new model built from four layers:
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          <strong>Causal Reachability Model (CRM)</strong> as a control plane
        </li>
        <li>
          <strong>DecisionGraph Core (DGC)</strong> as a semantic graph substrate
        </li>
        <li>
          <strong>TraceOS</strong> as an execution and trace layer
        </li>
        <li>
          <strong>x402</strong> as an economic coordination layer
        </li>
      </ul>

      <blockquote className="border-l-2 pl-4 italic">
        An AI-native internet based on reachability over meaning.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        2. Problem Statement
      </h2>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        2.1 Human-Centric Information Structures
      </h3>

      <p>
        Modern systems rely on documents, chat logs, summaries, and knowledge
        bases.
      </p>

      <p>
        These are optimized for human interpretation, but inefficient for
        machine reasoning.
      </p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        2.2 Location-Based Web
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Domain → URL → Document`}
        </pre>
      </div>

      <p>
        This model answers:
      </p>

      <blockquote className="border-l-2 pl-4 italic">
        Where is the information?
      </blockquote>

      <p>
        But AI systems need to answer what is relevant, causally related, and
        accessible under constraints.
      </p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        2.3 Post-hoc Control is Unsafe
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Access everything → Filter later`}
        </pre>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        <li>Data leakage</li>
        <li>Prompt injection vulnerabilities</li>
        <li>Incorrect tool usage</li>
        <li>Policy violations</li>
      </ul>

      <blockquote className="border-l-2 pl-4 italic">
        Current systems cannot guarantee what actions are structurally impossible.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        3. Core Principle: Reachability
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        Systems should not check actions after they are proposed.
        <br />
        They should define what actions are reachable.
      </blockquote>

      <p>
        This is the foundation of the <strong>Causal Reachability Model (CRM)</strong>.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        4. Causal Reachability Model (CRM)
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Reachable(start, constraints, intent)`}
        </pre>
      </div>

      <p>
        An action is possible only if a valid path exists.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>No path → No execution</li>
        <li>Constraints are structural, not interpretive</li>
        <li>Access and action are unified</li>
      </ul>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Traditional:
Agent → Permission → Action

CRM:
Agent → Path → Action`}
        </pre>
      </div>

      <blockquote className="border-l-2 pl-4 italic">
        CRM defines the space of possible behavior.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        5. DecisionGraph Core (DGC)
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Node:
  State | Decision | Incident | Claim | Role | Action

Edge:
  causes | depends_on | approves | affects | supersedes`}
        </pre>
      </div>

      <p>
        DGC serves as a deterministic graph for reasoning, decision-making, and
        execution constraints.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        6. TraceOS
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`IntentReceived
RouteResolved
ActionExecuted
ResultObserved`}
        </pre>
      </div>

      <ul className="list-disc pl-5 space-y-2">
        <li>Full provenance</li>
        <li>Replay</li>
        <li>Explainability</li>
        <li>Counterfactual simulation</li>
      </ul>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        7. Semantic Routing
      </h2>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Traditional Web
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`GET /docs/api`}
        </pre>
      </div>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        Agentic Web
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`{
  "intent": "incident investigation",
  "scope": "payment_api",
  "budget": 0.05
}`}
        </pre>
      </div>

      <blockquote className="border-l-2 pl-4 italic">
        URL routing is location-based.
        <br />
        CRM routing is reachability-based.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        8. Structural Compression
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        Instead of compressing information into summaries,
        <br />
        we compress it into reachable structure.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        9. Control Plane Architecture
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Application Layer
  AI Agents / Humans

Control Plane
  CRM

Semantic Layer
  DGC

Trace Layer
  TraceOS

Economic Layer
  x402

Transport
  HTTP / MCP`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        10. Economic Layer (x402)
      </h2>

      <p>
        This enables autonomous API usage, data acquisition, and external
        computation.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        11. Evolution of the Web
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Document Web
    →
Semantic Web
    →
Agentic Semantic Web`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        12. Future Directions
      </h2>

      <ul className="list-disc pl-5 space-y-2">
        <li>Intent-based routing infrastructure</li>
        <li>Semantic DNS</li>
        <li>Agent reputation graphs</li>
        <li>Trust propagation</li>
        <li>Semantic firewall</li>
        <li>Autonomous negotiation protocols</li>
      </ul>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        13. Closing Vision
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        The next generation of the web will not be navigated by URLs,
        <br />
        but by reachability over meaning.
      </blockquote>

      <blockquote className="border-l-2 pl-4 italic">
        A secure system is not one where bad behavior is forbidden.
        <br />
        A secure system is one where bad behavior is unreachable.
      </blockquote>
    </ConceptPageTemplate>
  );
}
