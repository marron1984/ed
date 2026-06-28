import {
  ageOptions,
  smokingOptions,
  drinkingOptions,
  exerciseOptions,
  historyOptions,
  symptomOptions,
  labelOf,
  labelsOf,
} from "@/data/questions";
import type { ConsultationState, Action } from "./state";
import {
  ChoiceGroup,
  CheckGroup,
  TextField,
  FieldLabel,
} from "./fields";
import { ReferralNotice, InfoNote } from "./Notice";
import { Clock, Lock, ShieldCheck } from "lucide-react";

type StepProps = {
  state: ConsultationState;
  dispatch: React.Dispatch<Action>;
};

export function hasReferral(history: string[]): boolean {
  return history.some(
    (v) => historyOptions.find((o) => o.value === v)?.referral
  );
}

export function IntroStep() {
  return (
    <div className="space-y-6">
      <p className="text-sm leading-relaxed text-navy/70">
        これからオンライン問診を始めます。選択式の質問が中心で、
        所要時間は<strong className="font-bold text-navy">約3分</strong>です。
      </p>
      <ul className="space-y-3">
        {[
          { icon: Clock, text: "所要時間は約3分。途中で前の質問に戻れます。" },
          { icon: Lock, text: "プライバシーに配慮した設計を想定しています。" },
          { icon: ShieldCheck, text: "ご回答は医師が確認します（本サイトはデモです）。" },
        ].map(({ icon: Icon, text }) => (
          <li key={text} className="flex items-center gap-3 text-sm text-navy/80">
            <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-teal/10">
              <Icon className="h-5 w-5 text-teal" />
            </span>
            {text}
          </li>
        ))}
      </ul>
      <InfoNote>
        本サイトはデモ用モックです。入力内容は保存されず、リロードすると消えます。
        実際の診療・決済は行いません。
      </InfoNote>
    </div>
  );
}

export function BasicStep({ state, dispatch }: StepProps) {
  return (
    <div className="space-y-8">
      <div>
        <FieldLabel>年齢を教えてください</FieldLabel>
        <ChoiceGroup
          options={ageOptions}
          value={state.age}
          onSelect={(value) => dispatch({ type: "setSingle", field: "age", value })}
        />
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <FieldLabel optional>身長</FieldLabel>
          <TextField
            type="number"
            value={state.height}
            onChange={(value) => dispatch({ type: "setText", field: "height", value })}
            placeholder="170"
            suffix="cm"
          />
        </div>
        <div>
          <FieldLabel optional>体重</FieldLabel>
          <TextField
            type="number"
            value={state.weight}
            onChange={(value) => dispatch({ type: "setText", field: "weight", value })}
            placeholder="65"
            suffix="kg"
          />
        </div>
      </div>
    </div>
  );
}

export function LifestyleStep({ state, dispatch }: StepProps) {
  return (
    <div className="space-y-8">
      <div>
        <FieldLabel>喫煙について</FieldLabel>
        <ChoiceGroup
          options={smokingOptions}
          value={state.smoking}
          onSelect={(value) => dispatch({ type: "setSingle", field: "smoking", value })}
        />
      </div>
      <div>
        <FieldLabel>飲酒について</FieldLabel>
        <ChoiceGroup
          options={drinkingOptions}
          value={state.drinking}
          onSelect={(value) => dispatch({ type: "setSingle", field: "drinking", value })}
        />
      </div>
      <div>
        <FieldLabel>運動の習慣</FieldLabel>
        <ChoiceGroup
          options={exerciseOptions}
          value={state.exercise}
          onSelect={(value) => dispatch({ type: "setSingle", field: "exercise", value })}
        />
      </div>
    </div>
  );
}

export function HistoryStep({ state, dispatch }: StepProps) {
  return (
    <div className="space-y-2">
      <FieldLabel>
        当てはまるものを選択してください（複数選択可）
      </FieldLabel>
      <p className="mb-4 text-sm text-navy/60">
        現在の持病や服用中のお薬について教えてください。
      </p>
      <CheckGroup
        options={historyOptions}
        values={state.history}
        onToggle={(value) => dispatch({ type: "toggleHistory", value })}
      />
      {hasReferral(state.history) && <ReferralNotice />}
    </div>
  );
}

export function SymptomStep({ state, dispatch }: StepProps) {
  return (
    <div className="space-y-8">
      <div>
        <FieldLabel>ご希望に近いものを選択してください（複数選択可）</FieldLabel>
        <CheckGroup
          options={symptomOptions}
          values={state.symptoms}
          onToggle={(value) => dispatch({ type: "toggleSymptom", value })}
        />
      </div>
      <div>
        <FieldLabel optional>医師に伝えたいこと</FieldLabel>
        <TextField
          multiline
          value={state.freeText}
          onChange={(value) => dispatch({ type: "setText", field: "freeText", value })}
          placeholder="気になることがあればご記入ください（任意）"
        />
      </div>
    </div>
  );
}

export function ReviewStep({ state }: StepProps) {
  const rows: { label: string; value: string }[] = [
    { label: "年齢", value: labelOf(ageOptions, state.age) },
    { label: "身長", value: state.height ? `${state.height} cm` : "未入力" },
    { label: "体重", value: state.weight ? `${state.weight} kg` : "未入力" },
    { label: "喫煙", value: labelOf(smokingOptions, state.smoking) },
    { label: "飲酒", value: labelOf(drinkingOptions, state.drinking) },
    { label: "運動", value: labelOf(exerciseOptions, state.exercise) },
    { label: "既往歴・服薬", value: labelsOf(historyOptions, state.history) },
    { label: "症状・希望", value: labelsOf(symptomOptions, state.symptoms) },
    { label: "医師に伝えたいこと", value: state.freeText || "未入力" },
  ];

  return (
    <div className="space-y-5">
      <p className="text-sm text-navy/70">
        以下の内容で問診を受け付けます。修正がある場合は「前へ」で戻れます。
      </p>
      <dl className="divide-y divide-navy/10 rounded-2xl border border-navy/10 bg-white">
        {rows.map((row) => (
          <div
            key={row.label}
            className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:gap-4"
          >
            <dt className="w-40 flex-shrink-0 text-sm font-bold text-navy/70">
              {row.label}
            </dt>
            <dd className="text-sm text-navy">{row.value}</dd>
          </div>
        ))}
      </dl>
      {hasReferral(state.history) && <ReferralNotice />}
    </div>
  );
}
