export const getInstallCommand = (
  packageNames: string | string[],
  packageManager: string
): string => {
  let installCommand = "";

  switch (packageManager) {
    case "npm":
      installCommand = `npm install ${packageNames}`;
      break;
    case "yarn":
      installCommand = `yarn add ${packageNames}`;
      break;
    case "pnpm":
      installCommand = `pnpm add ${packageNames}`;
      break;
    default:
      installCommand = `npm install ${packageNames}`;
      break;
  }

  return installCommand;
};
