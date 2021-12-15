export const GBimage = ({ imgName }: { imgName: string }) => {
  return <img src={process.env.PUBLIC_URL + imgName} className="mx-auto container" alt="bg" />
}
