import * as countType from "./type";

export default function(count, action) {
  switch (action.type) {
    case countType.INCREMENT:
      return count + 1;
    case countType.CLEAN:
      return (count = 0);
    default:
      break;
  }
}
