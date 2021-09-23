import { SubstrateEvent } from "@subql/types";
import { StarterEntity } from "../types";
import { MemberCount } from "@polkadot/types/interfaces";

export async function handleVoting(event: SubstrateEvent): Promise<void> {
    const account = event.event.data[0];
    const voted = event.event.data[1];
    const number_voted_yes = event.event.data[2];
    const number_voted_no = event.event.data[3];

    const councilVote = new StarterEntity(
        `${event.block.block.header.number.toNumber()}-${event.idx}`,
    );
    councilVote.account = account.toString();
    councilVote.voted = voted as unknown as boolean
    councilVote.number_voted_yes = (number_voted_no as MemberCount).toBigInt()
    councilVote.number_voted_no = (number_voted_yes as MemberCount).toBigInt()
    await councilVote.save();
}
