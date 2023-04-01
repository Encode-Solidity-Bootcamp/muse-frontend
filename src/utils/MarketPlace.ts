import { prepareWriteContract, writeContract } from '@wagmi/core'
import { LOTTERY_ABI, LOTTERY_CONTRACT } from '@/constants'

export const Comm = async () => {
  const config = await prepareWriteContract({
    address: LOTTERY_CONTRACT,
    abi: LOTTERY_ABI,
    functionName: 'betsOpen',
  })
  const data = await writeContract(config)
  data.wait()
  console.log(data)
}
