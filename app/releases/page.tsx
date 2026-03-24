import releases from "@/data/releases.json";
import Changelog from "../_components/Changelog";
import { Brand } from "@ui/Brand";

type Package = {
  name: string;
  version: string;
};

type Item = {
  text: string;
  packages?: Package[];
};

type Section = {
  title: string;
  items: Item[];
};

type Release = {
  version: string;
  date: string;
  sections: Section[];
};

export default function ReleasesPage() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 mb-10">
        <Brand>DecisionGraph Core</Brand>
        <h1 className="text-3xl font-bold mt-4">Releases</h1>
        <p className="text-sm opacity-70 mt-2">
          Structured changelog generated from the DecisionGraph Core repository.
        </p>
      </div>

      {/* Changelog */}
      <Changelog releases={releases as Release[]} />
    </div>
  );
}
