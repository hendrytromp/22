// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 59Hru9wnGgWyNEn96uQ7cS
// Component: 6U9u8oQG6qY7

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";

import { FormWrapper } from "@plasmicpkgs/antd5/skinny/Form";
import { formHelpers as FormWrapper_Helpers } from "@plasmicpkgs/antd5/skinny/Form";
import { FormItemWrapper } from "@plasmicpkgs/antd5/skinny/FormItem";
import { AntdInput } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdInput_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdPassword } from "@plasmicpkgs/antd5/skinny/registerInput";
import { inputHelpers as AntdPassword_Helpers } from "@plasmicpkgs/antd5/skinny/registerInput";
import { AntdButton } from "@plasmicpkgs/antd5/skinny/registerButton";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import plasmic_plasmic_rich_components_css from "../plasmic_rich_components/plasmic.module.css"; // plasmic-import: jkU633o1Cz7HrJdwdxhVHk/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 59Hru9wnGgWyNEn96uQ7cS/projectcss
import sty from "./PlasmicAuthForm.module.css"; // plasmic-import: 6U9u8oQG6qY7/css

createPlasmicElementProxy;

export type PlasmicAuthForm__VariantMembers = {
  mode: "signIn" | "signUp" | "checkEmail";
};
export type PlasmicAuthForm__VariantsArgs = {
  mode?: SingleChoiceArg<"signIn" | "signUp" | "checkEmail">;
};
type VariantPropType = keyof PlasmicAuthForm__VariantsArgs;
export const PlasmicAuthForm__VariantProps = new Array<VariantPropType>("mode");

export type PlasmicAuthForm__ArgsType = {
  handleSubmit?: (mode: string, credentials: any) => void;
};
type ArgPropType = keyof PlasmicAuthForm__ArgsType;
export const PlasmicAuthForm__ArgProps = new Array<ArgPropType>("handleSubmit");

export type PlasmicAuthForm__OverridesType = {
  root?: Flex__<"div">;
  credentialsForm?: Flex__<typeof FormWrapper>;
  input?: Flex__<typeof AntdInput>;
  passwordInput?: Flex__<typeof AntdPassword>;
  button?: Flex__<typeof AntdButton>;
};

export interface DefaultAuthFormProps {
  handleSubmit?: (mode: string, credentials: any) => void;
  mode?: SingleChoiceArg<"signIn" | "signUp" | "checkEmail">;
  className?: string;
}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAuthForm__RenderFunc(props: {
  variants: PlasmicAuthForm__VariantsArgs;
  args: PlasmicAuthForm__ArgsType;
  overrides: PlasmicAuthForm__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  const stateSpecs: Parameters<typeof useDollarState>[0] = React.useMemo(
    () => [
      {
        path: "credentialsForm.value",
        type: "private",
        variableType: "object",
        initFunc: ({ $props, $state, $queries, $ctx }) => undefined,

        refName: "credentialsForm",
        onMutate: generateOnMutateForSpec("value", FormWrapper_Helpers)
      },
      {
        path: "currentMode",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => "signIn"
      },
      {
        path: "mode",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) =>
          (() => {
            try {
              return $state.currentMode;
            } catch (e) {
              if (
                e instanceof TypeError ||
                e?.plasmicType === "PlasmicUndefinedDataError"
              ) {
                return undefined;
              }
              throw e;
            }
          })() ?? $props.mode
      },
      {
        path: "credentialsForm.isSubmitting",
        type: "private",
        variableType: "boolean",
        initFunc: ({ $props, $state, $queries, $ctx }) => false,

        refName: "credentialsForm",
        onMutate: generateOnMutateForSpec("isSubmitting", FormWrapper_Helpers)
      }
    ],
    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        plasmic_plasmic_rich_components_css.plasmic_tokens,
        sty.root,
        {
          [sty.rootmode_checkEmail]: hasVariant($state, "mode", "checkEmail"),
          [sty.rootmode_signIn]: hasVariant($state, "mode", "signIn"),
          [sty.rootmode_signUp]: hasVariant($state, "mode", "signUp")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__a5OIs, {
          [sty.freeBoxmode_checkEmail__a5OIsCabaD]: hasVariant(
            $state,
            "mode",
            "checkEmail"
          )
        })}
      >
        {(() => {
          const child$Props = {
            className: classNames("__wab_instance", sty.credentialsForm, {
              [sty.credentialsFormmode_signUp]: hasVariant(
                $state,
                "mode",
                "signUp"
              )
            }),
            extendedOnValuesChange: generateStateOnChangePropForCodeComponents(
              $state,
              "value",
              ["credentialsForm", "value"],
              FormWrapper_Helpers
            ),
            formItems: undefined,
            labelCol: { span: 8, horizontalOnly: true },
            layout: "vertical",
            mode: undefined,
            onFinish: async values => {
              const $steps = {};

              $steps["runHandleSubmit"] = true
                ? (() => {
                    const actionArgs = {
                      eventRef: $props["handleSubmit"],
                      args: [
                        (() => {
                          try {
                            return $state.currentMode;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })(),
                        (() => {
                          try {
                            return $state.credentialsForm.value;
                          } catch (e) {
                            if (
                              e instanceof TypeError ||
                              e?.plasmicType === "PlasmicUndefinedDataError"
                            ) {
                              return undefined;
                            }
                            throw e;
                          }
                        })()
                      ]
                    };
                    return (({ eventRef, args }) => {
                      return eventRef?.(...(args ?? []));
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["runHandleSubmit"] != null &&
                typeof $steps["runHandleSubmit"] === "object" &&
                typeof $steps["runHandleSubmit"].then === "function"
              ) {
                $steps["runHandleSubmit"] = await $steps["runHandleSubmit"];
              }

              $steps["updateCurrentMode"] =
                $state.currentMode === "signUp"
                  ? (() => {
                      const actionArgs = {
                        variable: {
                          objRoot: $state,
                          variablePath: ["currentMode"]
                        },
                        operation: 0,
                        value: "checkEmail"
                      };
                      return (({
                        variable,
                        value,
                        startIndex,
                        deleteCount
                      }) => {
                        if (!variable) {
                          return;
                        }
                        const { objRoot, variablePath } = variable;

                        $stateSet(objRoot, variablePath, value);
                        return value;
                      })?.apply(null, [actionArgs]);
                    })()
                  : undefined;
              if (
                $steps["updateCurrentMode"] != null &&
                typeof $steps["updateCurrentMode"] === "object" &&
                typeof $steps["updateCurrentMode"].then === "function"
              ) {
                $steps["updateCurrentMode"] = await $steps["updateCurrentMode"];
              }
            },
            onIsSubmittingChange: generateStateOnChangePropForCodeComponents(
              $state,
              "isSubmitting",
              ["credentialsForm", "isSubmitting"],
              FormWrapper_Helpers
            ),
            ref: ref => {
              $refs["credentialsForm"] = ref;
            },
            wrapperCol: { span: 16, horizontalOnly: true }
          };
          initializeCodeComponentStates(
            $state,
            [
              {
                name: "value",
                plasmicStateName: "credentialsForm.value"
              },
              {
                name: "isSubmitting",
                plasmicStateName: "credentialsForm.isSubmitting"
              }
            ],
            [],
            FormWrapper_Helpers ?? {},
            child$Props
          );

          return (
            <FormWrapper
              data-plasmic-name={"credentialsForm"}
              data-plasmic-override={overrides.credentialsForm}
              {...child$Props}
            >
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__sK4Lq)}
                label={"Email"}
                name={"email"}
              >
                <AntdInput
                  className={classNames("__wab_instance", sty.input)}
                />
              </FormItemWrapper>
              <FormItemWrapper
                className={classNames("__wab_instance", sty.formField__zX0Cd)}
                label={"Password"}
                name={"password"}
              >
                <AntdPassword
                  className={classNames("__wab_instance", sty.passwordInput)}
                />
              </FormItemWrapper>
              <AntdButton
                className={classNames("__wab_instance", sty.button, {
                  [sty.buttonmode_signUp]: hasVariant($state, "mode", "signUp")
                })}
                submitsForm={true}
                type={"primary"}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__myqcy,
                    {
                      [sty.textmode_signUp__myqcybkKf]: hasVariant(
                        $state,
                        "mode",
                        "signUp"
                      )
                    }
                  )}
                >
                  {hasVariant($state, "mode", "signUp") ? "Sign Up" : "Sign In"}
                </div>
              </AntdButton>
            </FormWrapper>
          );
        })()}
        <div
          className={classNames(projectcss.all, sty.freeBox__g0ZsT, {
            [sty.freeBoxmode_checkEmail__g0ZsTCabaD]: hasVariant(
              $state,
              "mode",
              "checkEmail"
            )
          })}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__cdOBa,
              {
                [sty.textmode_signUp__cdOBabkKf]: hasVariant(
                  $state,
                  "mode",
                  "signUp"
                )
              }
            )}
            onClick={async event => {
              const $steps = {};

              $steps["updateCurrentMode"] = true
                ? (() => {
                    const actionArgs = {
                      variable: {
                        objRoot: $state,
                        variablePath: ["currentMode"]
                      },
                      operation: 0,
                      value:
                        $state.currentMode === "signIn"
                          ? "signUp"
                          : $state.currentMode === "signUp"
                          ? "signIn"
                          : "checkEmail"
                    };
                    return (({ variable, value, startIndex, deleteCount }) => {
                      if (!variable) {
                        return;
                      }
                      const { objRoot, variablePath } = variable;

                      $stateSet(objRoot, variablePath, value);
                      return value;
                    })?.apply(null, [actionArgs]);
                  })()
                : undefined;
              if (
                $steps["updateCurrentMode"] != null &&
                typeof $steps["updateCurrentMode"] === "object" &&
                typeof $steps["updateCurrentMode"].then === "function"
              ) {
                $steps["updateCurrentMode"] = await $steps["updateCurrentMode"];
              }
            }}
          >
            {hasVariant($state, "mode", "signUp")
              ? "Already have an account? Sign In Now"
              : "Don't have an account? Sign Up Now"}
          </div>
        </div>
      </div>
      <div
        className={classNames(projectcss.all, sty.freeBox__lkWVc, {
          [sty.freeBoxmode_checkEmail__lkWVcCabaD]: hasVariant(
            $state,
            "mode",
            "checkEmail"
          )
        })}
      >
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__c5DHh,
            {
              [sty.textmode_checkEmail__c5DHhCabaD]: hasVariant(
                $state,
                "mode",
                "checkEmail"
              )
            }
          )}
        >
          {"Check your email"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "credentialsForm", "input", "passwordInput", "button"],
  credentialsForm: ["credentialsForm", "input", "passwordInput", "button"],
  input: ["input"],
  passwordInput: ["passwordInput"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  credentialsForm: typeof FormWrapper;
  input: typeof AntdInput;
  passwordInput: typeof AntdPassword;
  button: typeof AntdButton;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAuthForm__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAuthForm__VariantsArgs;
    args?: PlasmicAuthForm__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAuthForm__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAuthForm__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicAuthForm__ArgProps,
          internalVariantPropNames: PlasmicAuthForm__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAuthForm__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAuthForm";
  } else {
    func.displayName = `PlasmicAuthForm.${nodeName}`;
  }
  return func;
}

export const PlasmicAuthForm = Object.assign(
  // Top-level PlasmicAuthForm renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    credentialsForm: makeNodeComponent("credentialsForm"),
    input: makeNodeComponent("input"),
    passwordInput: makeNodeComponent("passwordInput"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicAuthForm
    internalVariantProps: PlasmicAuthForm__VariantProps,
    internalArgProps: PlasmicAuthForm__ArgProps
  }
);

export default PlasmicAuthForm;
/* prettier-ignore-end */
