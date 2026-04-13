import { ConceptPageTemplate } from "../../_components/ConceptPageTemplate";

export default function Page() {
  return (
    <ConceptPageTemplate
      category="Core Concept"
      title="Causal Reachability Model (CRM)"
      subtitle="A Proposal for Secure and Responsible Systems in the Age of AI"
      sectionTitle="1. Overview"
    >
      <p>
        Modern systems rely on rules.
      </p>

      <p>
        We define policies, write guidelines, and instruct agents—human or
        artificial—on what they should or should not do. Yet, these rules are
        routinely violated, misunderstood, or bypassed.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          Access control systems grant broad permissions that are difficult to
          constrain dynamically
        </li>
        <li>
          RAG systems retrieve sensitive data before access checks are enforced
        </li>
        <li>
          AI agents can be manipulated through prompt injection and adversarial
          inputs
        </li>
        <li>
          Compliance frameworks depend on interpretation rather than enforcement
        </li>
      </ul>

      <p>
        Across domains, the pattern is the same:
      </p>

      <blockquote className="border-l-2 pl-4 italic">
        Rules exist, but they can be broken.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        2. The Shift
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        Security should not rely on rules.
        <br />
        It should rely on reachability.
      </blockquote>

      <p>
        Instead of asking whether an action is allowed, CRM asks whether there
        exists a valid path to the action.
      </p>

      <p>
        If no such path exists, the action is not merely forbidden—it is
        impossible.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        3. Core Model
      </h2>
    <div className="mt-4 rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
  <pre className="overflow-x-auto text-xs leading-6">
{`G = (V, E, Φ)

R(s, τ) = { t ∈ V | s ⇝ t is valid at commit τ }`}
  </pre>
</div>

<p>
  Here, <code>V</code> represents immutable decision nodes,
  <code>E</code> directed causal edges, and <code>Φ</code> semantic relations.
</p>
      <p>
        A state is reachable if and only if there exists a valid causal path to
        it, where all constraints along the path are satisfied.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>Systems are represented as graphs of states and transitions</li>
        <li>Actions are reachable only through valid causal paths</li>
        <li>Each transition is constrained by explicit conditions</li>
        <li>
          Permissions are derived from structure, not assigned as static flags
        </li>
      </ul>

      <blockquote className="border-l-2 pl-4 italic">
        No path means no capability.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        4. From Permission to Path
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Traditional Model
User → hasPermission → Action

CRM Model
Actor
 → Role
 → Context
 → Constraints
 → Approval
 → Action`}
        </pre>
      </div>

      <p>
        Access is no longer a boolean decision. It becomes the result of a
        validated causal chain.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        5. Key Principle
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        CRM does not control behavior.
        <br />
        It defines the space of reachable actions.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
  6. Why This Matters
</h2>

<h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
  6.1 AI Safety by Construction
</h3>

<p>
  AI systems do not need to perfectly interpret rules.
</p>

<p>
  They may generate any intention internally, but:
</p>

<blockquote className="border-l-2 pl-4 italic">
  They cannot execute actions without a valid path.
</blockquote>

<p>
  Prompt injection becomes insufficient, because persuasion
  cannot create structure.
</p>

<h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
  6.2 Security as Topology
</h3>

<p>
  Security becomes a property of system structure.
</p>

<ul className="list-disc pl-5 space-y-2">
  <li>No edge → no transition</li>
  <li>No path → no execution</li>
</ul>

<p>
  This eliminates entire classes of vulnerabilities rooted in
  misinterpretation or misuse.
</p>

<h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
  6.3 Compliance as Reachability
</h3>

<p>
  Compliance shifts from:
</p>

<blockquote className="border-l-2 pl-4 italic">
  Did anyone violate the rules?
</blockquote>

<p>
  to:
</p>

<blockquote className="border-l-2 pl-4 italic">
  Is violation even reachable?
</blockquote>

<p>
  This enables:
</p>

<ul className="list-disc pl-5 space-y-2">
  <li>Deterministic audits</li>
  <li>Formal verification</li>
  <li>Continuous validation</li>
</ul>

<h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
  6.4 Explainability Through Causality
</h3>

<p>
  Every action is traceable through its path:
</p>

<ul className="list-disc pl-5 space-y-2">
  <li>Why was it allowed?</li>
  <li>Which constraints were satisfied?</li>
  <li>What enabled the transition?</li>
</ul>

<blockquote className="border-l-2 pl-4 italic">
  Explanation is not reconstructed—it is inherent.
</blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        7. Architecture
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`AI / Agent Layer
  → proposes actions

Reachability Layer (Graph)
  → validates possible paths

Execution Layer
  → executes only reachable actions`}
        </pre>
      </div>

      <p>
        Agents are free to think.
      </p>

      <p>
        They are not free to act beyond the graph.
      </p>
    <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
  <pre className="overflow-x-auto text-xs leading-6">
{`Active(V) = {
  v ∈ V |
  ¬∃ v' ∈ V, v →supersedes v'
}`}
  </pre>
</div>

<p>
  Only active nodes participate in valid traversal.
  Superseded nodes remain immutable but are structurally shadowed.
</p>
      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        8. Implementation Stack
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`DecisionGraph Core
  = Reachability Engine

TraceOS
  = State Transition Layer

ClaimAtom
  = Causal Justification Layer

TraceSupport
  = Path Debugging / Explanation Layer`}
        </pre>
      </div>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        9. Implications
      </h2>

      <ul className="list-disc pl-5 space-y-2">
        <li>AI agents and autonomous systems</li>
        <li>Financial transactions and approval workflows</li>
        <li>Healthcare data access</li>
        <li>Enterprise systems</li>
        <li>Multi-agent coordination</li>
        <li>Knowledge and reasoning systems</li>
      </ul>

      <blockquote className="border-l-2 pl-4 italic">
        Control what is reachable, not what is intended.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        10. Conclusion
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        A secure system is not one where bad behavior is forbidden.
        <br />
        A secure system is one where bad behavior is unreachable.
      </blockquote>

      <p>
        Define what is reachable.
        <br />
        Everything else becomes impossible.
      </p>
    </ConceptPageTemplate>
  );
}
