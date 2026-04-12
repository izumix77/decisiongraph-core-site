
import { ConceptPageTemplate } from "../../_components/ConceptPageTemplate";

export default function Page() {
  return (
    <ConceptPageTemplate
      category="Operational Model"
      title="AI-Native Control Plane"
      subtitle="Operationalizing the Causal Reachability Model for AI Systems"
      sectionTitle="1. Overview"
    >
      <p>
        In modern software systems, AI is no longer just an inference engine.
      </p>

      <p>
        It is increasingly becoming an active execution layer responsible for:
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>state transitions</li>
        <li>decision support</li>
        <li>workflow orchestration</li>
        <li>external actions</li>
        <li>policy-aware execution</li>
      </ul>

      <p>
        However, most current AI deployments still rely heavily on:
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>natural-language prompts</li>
        <li>fragmented rules</li>
        <li>manual permission management</li>
        <li>human-driven coordination</li>
      </ul>

      <p>
        This creates major challenges in reproducibility, operational safety,
        explainability, and governance.
      </p>

      <p>
        DecisionGraph Core addresses this by introducing an{" "}
        <strong>AI-native control plane</strong> built on the{" "}
        <strong>Causal Reachability Model (CRM)</strong>.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        2. Why a Control Plane Matters
      </h2>

      <p>
        In traditional software infrastructure, the control plane is responsible
        for:
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>permissions</li>
        <li>routing</li>
        <li>policy enforcement</li>
        <li>operational boundaries</li>
        <li>auditability</li>
        <li>replayability</li>
      </ul>

      <p>AI systems require the same discipline.</p>

      <blockquote className="border-l-2 pl-4 italic">
        The problem is not merely what AI is allowed to do.
        <br />
        The real question is what AI can structurally reach.
      </blockquote>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        3. From Permission Control to Reachability Control
      </h2>

      <p>Traditional access control is ACL-oriented.</p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`allow(user, action)
deny(user, action)`}
        </pre>
      </div>

      <p>
        DecisionGraph Core introduces <strong>reachability-based control</strong>.
      </p>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`reachable(subject, context, intent)`}
        </pre>
      </div>

      <p>
        Instead of checking whether an action is explicitly allowed, the system
        determines which states, information, and actions are causally reachable
        under the current context.
      </p>

      <p>This is fundamentally a graph traversal problem.</p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        4. CRM as the AI Control Plane
      </h2>

      <p>
        The Causal Reachability Model acts as the operational control layer for
        AI systems across four dimensions.
      </p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        4.1 Context Reachability
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Prompt
 -> reachable subgraph`}
        </pre>
      </div>

      <p>
        Only the relevant subgraph is exposed to the AI.
      </p>

      <p>
        In practice, the reachable subgraph <strong>is</strong> the prompt.
      </p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        4.2 Action Reachability
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Draft
 -> Review
 -> Approve
 -> Publish`}
        </pre>
      </div>

      <p>
        If <code>Publish</code> is not reachable from the current node, the
        transition becomes structurally impossible.
      </p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        4.3 Organizational Reachability
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Engineer
 -> Team Lead
 -> Product Owner
 -> Release`}
        </pre>
      </div>

      <p>
        This replaces ambiguous human coordination flows with explicit decision
        paths.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>Slack-based alignment overhead</li>
        <li>implicit approvals</li>
        <li>undocumented handoffs</li>
      </ul>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        4.4 Incident Reachability
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`Incident
 -> caused_by -> Deployment
 -> affects -> Payment API
 -> escalates_to -> On-call`}
        </pre>
      </div>

      <p>
        This enables root-cause tracing, escalation routing, accountability
        chains, and recurrence prevention.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        5. Practical Value in AI Operations
      </h2>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.1 Structural Compression Instead of Summarization
      </h3>

      <p>
        Most white-collar work is dominated by communication overhead.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>Slack threads</li>
        <li>meetings</li>
        <li>summaries</li>
        <li>status relays</li>
        <li>clarification loops</li>
      </ul>

      <blockquote className="border-l-2 pl-4 italic">
        The structure itself becomes the summary.
      </blockquote>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.2 Preventing Prompt Bloat
      </h3>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`prompt rules
    ↓
reachable graph constraints`}
        </pre>
      </div>

      <p>
        This moves control from natural language into deterministic structure.
      </p>

      <h3 className="pt-4 text-base font-semibold text-[color:var(--color-ink)]">
        5.3 Reducing Organizational Misalignment
      </h3>

      <p>
        CRM explicitly defines who can reach what, under which conditions,
        through which transitions, and with what dependencies.
      </p>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        6. Integration with TraceOS
      </h2>

      <div className="rounded-xl border border-[color:var(--color-border)] bg-white/70 p-4">
        <pre className="overflow-x-auto text-xs leading-6">
{`IntentReceived
 -> ReachabilityResolved
 -> ActionExecuted
 -> ResultObserved`}
        </pre>
      </div>

      <p>
        Every transition is recorded in an append-only event stream.
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>deterministic replay</li>
        <li>operational audits</li>
        <li>causal debugging</li>
        <li>regression detection</li>
        <li>counterfactual simulation</li>
      </ul>

      <h2 className="pt-6 text-lg font-semibold text-[color:var(--color-ink)]">
        7. Closing
      </h2>

      <blockquote className="border-l-2 pl-4 italic">
        Structurally eliminate preventable failures
        <br />
        while maximizing operational productivity.
      </blockquote>

      <p>
        Within DecisionGraph Core, the Causal Reachability Model serves as the
        foundation of that control layer.
      </p>
    </ConceptPageTemplate>
  );
}
