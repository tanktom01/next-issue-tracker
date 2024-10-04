import { Skeleton } from "@/app/components";
import { Flex, Card, Box } from "@radix-ui/themes";

const LoadingIssueDetailPage = () => {
  return (
    <Box>
      <Skeleton width={"10rem"} />
      <Flex gap={"3"}>
        <Skeleton width={"5rem"} />
        <Skeleton width={"8rem"} />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};

export default LoadingIssueDetailPage;
