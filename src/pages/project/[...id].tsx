import Title from '@/components/auth/Title';
import PrimaryLayout from '@/components/Layouts/PrimaryLayout';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProjectRequest } from 'src/redux/reducers/post/load/loadProject';
import { RootState } from 'src/redux/store';

const Container = styled.div`
  max-width: 1280px;
  min-width: 1280px;
`;

const Box = styled.div`
  background-color: #4545;
  width: 40%;
`;

const ProjectDetail = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    dispatch(loadProjectRequest(id));
  }, [dispatch, id]);

  const { singleProject } = useSelector(
    (state: RootState) => state.loadProject
  );
  console.log(singleProject);
  return (
    <PrimaryLayout>
      {singleProject ? (
        <Container>
          <Title title={singleProject?.name} />
          <Box>
            <Title sm title="Positions" />
          </Box>
        </Container>
      ) : null}
    </PrimaryLayout>
  );
};

export default ProjectDetail;
